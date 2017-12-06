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
    @ManyToOne
    public Airport airport;
    @NotNull
    public int maxFuelLevel;
    @NotNull
    public int fuelLevel;

    public Aircraft(int id, String aircraftName, Airport airport, int maxFuelLevel, int fuelLevel) {
        this.id = id;
        this.aircraftName = aircraftName;
        this.airport = airport;
        this.maxFuelLevel = maxFuelLevel;
        this.fuelLevel = fuelLevel;
    }

    public String getAircraftName() {
        return aircraftName;
    }

    public void setAircraftName(String aircraftName) {
        this.aircraftName = aircraftName;
    }

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
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
}
