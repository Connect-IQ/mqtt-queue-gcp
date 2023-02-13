let MQTT_queue = {
  _pub: ffi('bool mgos_mqtt_queue_send_event_pub_json(char *, char * )'),

  //_pub: ffi('bool mgos_mqtt_queue_gcp_send_event_subf(char *, void *)'),
  // ## **`MQTT_queue.pub(topic, message)`**
  // Publish message to a topic. 
  // Return value: 0 on failure (e.g. no connection to server), 1 on success.
  
  pub: function(t, m) {
    return this._pub(t, m);
  },
};
