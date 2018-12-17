collabQueries = require("../db/queries.collaborators.js");

module.exports = class ApplicationPolicy {

     constructor(user, record) {
       this.user = user;
       this.record = record;
     }

     _isOwner() {
        return this.record && (this.record.userId == this.user.id);
      }

     _isPremium() {
       return this.user && this.user.role == "premium";
     }

     _isAdmin() {
        return this.user && this.user.role == "admin";
      }

     _isStandard() {
        return this.user && this.user.role == "standard";
     }
   
     _isCollaborator() {
      if (!user || !record) {
        return false;
      }
      return collabQueries.isCollab(user.id, record.id, collab => {
        if (!collab) {
          return false;
        } else {
          return true;
        }
      });
    }
     
     new() {
       return this.user != null;
     }
   
     create() {
       return this.new();
     }
   
     show() {
       return true;
     }
   
     edit() {
      if (!this.record || !this.user) {
        return false;
      } else if (this.record.private) {
        return this.record.userId == this.user.id;
      } else {
        return true; //it was a public record
      }
    }
  
   
     update() {
       return this.edit();
     }
   
     destroy() {
       return this.update();
     }
   }
   