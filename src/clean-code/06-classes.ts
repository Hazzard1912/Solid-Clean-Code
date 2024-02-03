(() => {
  /**
   * Principio de responsabilidad unica para clases:
   */

  // No aplicando el principio
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  // Esta clase violenta el principio de responsabilidad unica porque
  // hace muchas cosas, es dificil mantener y saber como funciona al
  // leerlo.
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "jhonnier@mail.com",
    "Admin",
    "Jhonnier",
    "M",
    new Date("1999-06-05")
  );
})();
