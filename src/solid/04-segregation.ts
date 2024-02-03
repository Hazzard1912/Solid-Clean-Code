// Vamos categorizando lo que pueden o no hacer las clases que vamos
// creando:

interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}
interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

/**
 * La premisa es que nunca haya una clase que se vea obligada a implementar
 * una interfaz o metodos que no lo usen realmente. La vuelve menos 
 * flexible y cualquier cambio en la interfaz o clase la va a hacer 
 * caer.
 */

class Tucan implements Bird, FlyingBird {
  public run() {}
  public fly() {}
  public eat() {}
}
class Humminbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmerBird {
  public eat() {}
  public swim() {}
}
