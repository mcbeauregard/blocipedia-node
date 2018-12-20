module.exports = class ApplicationPolicy {

    constructor(user, record, collaborator = null) {
      this.user = user;
      this.record = record;
      this.collaborator = collaborator;
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
      if(this.record.private == false) {
        return this.new() &&
        this.record && (this._isStandard() || this._isAdmin() || this._isPremium());
      } else if (this.record.private == true) {
        return this.new() &&
        this.record && (this._isStandard() || this._isAdmin() || this._isPremium());
      }
    }
   
     update() {
       return this.edit();
     }
   
     destroy() {
       return this.update();
     }

     showCollaborators() {
      return this.edit();
    }

    removeCollaborator() {
      return this._isAdmin() || this._isOwner();
    }
   }
   