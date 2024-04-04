import { useState, useEffect } from 'react';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming')
      .then(response => response.json())
      .then(data => {
        setEvents(data.events);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const formatDate = dateString => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatDistance = distance => {
    return `${Math.round(parseFloat(distance) / 1000)} km`;
  };
  
  return (
    <div className="event-card">
      <div className="row">
        {events.map(event => (
          <div className="col-md-4 mb-4" key={event.eventName}>
            <div className="card">
              <div className="card-img">
                <img src={`/images/events/${event.eventName}.jpg`} alt={event.eventName} />
                <div className="overlay">
                  <p className="card-text">{formatDate(event.date)}</p>
                </div>
                <p className="card-title">{event.eventName}</p>
                <div className="flex">
                  <p className="card-text"><i className="fa fa-map-marker mr-1"></i> {event.cityName}</p>
                  <p className="card-text">{event.weather} | {formatDistance(event.distanceKm)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
