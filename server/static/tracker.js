const ONE_SECOND = 1000;
const ENDPOINT = 'http://localhost:8001/track';

const buildUserEvent = (event, tags) => ({
  event,
  tags,
  title: document.title,
  url: document.location.href,
  ts: (new Date()).toISOString(),
});

const buildPostBody = (userEvents) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify([...userEvents.keys()]),
});

const EventQueue = {
  userEvents: new Map(),
  lastSentTime: Date.now(),

  add(userEvent) {
    this.userEvents.set(userEvent);

    this.prepareAndSend(userEvent);
  },

  clear(eventsToSend) {
    eventsToSend.forEach((_val, key) => {
      if (this.userEvents.has(key)) {
        this.userEvents.delete(key);
      }
    });
  },

  prepareAndSend(userEvent) {
    const LAST_EVENT_TS = Date.parse(userEvent.ts);
    const eventsToSend = new Map([...this.userEvents]);

    if (userEvent.event === 'unload') {
      this.send(eventsToSend);

      return;
    }

    if ((LAST_EVENT_TS - this.lastSentTime) < ONE_SECOND) {
      return;
    }

    if (this.userEvents.size < 3) {
      return;
    }

    this.send(eventsToSend);
  },

  send(eventsToSend) {
    const body = buildPostBody(eventsToSend);

    fetch(ENDPOINT, body).then((res) => {
      if (res.ok) {
        this.lastSentTime = Date.now();
        this.clear(eventsToSend);
      }
    });
  }
};

const tracker = {
  track(event, ...tags) {
    const userEvent = buildUserEvent(event, tags);

    EventQueue.add(userEvent);
  }
};

window.onbeforeunload = () => {
  tracker.track('unload');
};
