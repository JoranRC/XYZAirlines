package com.joran.XYZAirlines.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Aircraft {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    public String aircraftName;
    @NotNull
    public String airportlocation;
    @NotNull
    public int maxFuelLevel;
    @NotNull
    public int fuelLevel;

    public Aircraft(){

    }

    public Aircraft(int id, String aircraftName, String airportlocation, int maxFuelLevel, int fuelLevel) {
        this.id = id;
        this.aircraftName = aircraftName;
        this.airportlocation = airportlocation;
        this.maxFuelLevel = maxFuelLevel;
        this.fuelLevel = fuelLevel;
    }

    public String getAircraftName() {
        return aircraftName;
    }

    public void setAircraftName(String aircraftName) {
        this.aircraftName = aircraftName;
    }

    public String getAirport() {
        return airportlocation;
    }

    public void setAirport(String airportlocation) {
        this.airportlocation = airportlocation;
    }

    public int getMaxFuelLevel() {
        return maxFuelLevel;
    }

    public void setMaxFuelLevel(int maxFuelLevel) {
        this.maxFuelLevel = maxFuelLevel;
    }

    public int getFuelLevel() {
        return fuelLevel;
    }

    public void setFuelLevel(int fuelLevel) {
        this.fuelLevel = fuelLevel;
    }

    public long getId() {
        return id;
    }
}
