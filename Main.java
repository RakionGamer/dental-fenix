import java.util.*;

class Carro {
    static class Engine {
        private int horsePower;
        private int cylinderCount;

        public Engine(int horsePower, int cylinderCount) {
            this.horsePower = horsePower;
            this.cylinderCount = cylinderCount;
        }

        public int getHorsePower() {
            return horsePower;
        }

        public int getCylinderCount() {
            return cylinderCount;
        }
    }

    private Engine engine;
    private String brand;
    private String model;
    private int year;
    private String color;

    public Carro(String brand, String model, int year, String color, int horsePower, int cylinderCount) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.engine = new Engine(horsePower, cylinderCount);
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public String getColor() {
        return color;
    }

    public Engine getEngine() {
        return engine;
    }
}

class SportsCar extends Carro {
    private boolean hasTurbo;

    public SportsCar(String brand, String model, int year, String color, int horsePower, int cylinderCount, boolean hasTurbo) {
        super(brand, model, year, color, horsePower, cylinderCount);
        this.hasTurbo = hasTurbo;
    }

    public boolean isHasTurbo() {
        return hasTurbo;
    }
}


public class Main {
  public static void main(String[] args) {
    Carro myCar = new Carro("Toyota", "Camry", 2020, "Red", 300, 6);
    
    System.out.println();
    
    SportsCar mySportsCar = new SportsCar("Porsche", "911", 2022, "Silver", 450, 6, true);
    
    System.out.println("Marca: " + myCar.getBrand());
    System.out.println("Modelo: " + myCar.getModel());
    System.out.println("Año: " + myCar.getYear());
    System.out.println("Color: " + myCar.getColor());
    System.out.println("Caballo de Fuerza: " + myCar.getEngine().getHorsePower());
    System.out.println("Cantidad de cilindros: " + myCar.getEngine().getCylinderCount());
    
    System.out.println();
    
    System.out.println("Marca: " + mySportsCar.getBrand());
    System.out.println("Modelo: " + mySportsCar.getModel());
    System.out.println("Año: " + mySportsCar.getYear());
    System.out.println("Color: " + mySportsCar.getColor());
    System.out.println("Caballo de Fuerza: " + mySportsCar.getEngine().getHorsePower());
    System.out.println("Cantidad de cilindros: " + mySportsCar.getEngine().getCylinderCount());
    System.out.println("Posee turbo: " + mySportsCar.isHasTurbo());
  }
}
