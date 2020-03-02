db = db.getSiblingDB('otus-domain');

db.createUser({
  user: USER,
  pwd: PASS,
  roles: [{
    role: "dbOwner",
    db: "otus-domain"
  }]
});

db.grantRolesToUser(USER, [ { role: "executeFunctions", db: "admin" } ]);