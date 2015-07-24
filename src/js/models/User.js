'use strict';

let UUID = 0;

/**
 * User
 * Not so important now, but will be required to cope with socail services.
 */
class User {

  /**
   * Constructor
   *
   * @param {UUID} user.id
   * @param {string} user.name
   * @param {Date} user.created
   * @param {Date} user.updated
   */
  constructor (user) {
    this.uuid    = user.id || UUID++;
    this.name    = user.name || 'hoge';
    this.created = new Date(user.created);
    this.updated = new Date(user.updated);
  }

}

export default User;
