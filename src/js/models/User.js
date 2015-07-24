'use strict';

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
    if (!user) { throw 'user required'; }
    this.uuid = user.id;
    this.name = user.name;
    this.setCreated(user.created);
    this.setUpdated(user.updated);
  }

  setCreated (created) {
    this.created = new Date(created);
    if (this.created.toISOString() !== created) {
      this.created = new Date();
    }
  }

  setUpdated (updated) {
    this.updated = new Date(updated);
    if (this.updated.toISOString() !== updated) {
      this.updated = new Date();
    }
  }

}

export default User;
