package com.joran.XYZAirlines.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 *@Author Joran
 *Aircraft model. Just a POJO
 */

@Entity
public class Aircraft {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private String aircraftName;
    @NotNull
    private String airportLocation;
    @NotNull
    private int maxFuelLevel;
    @NotNull
    private int fuelLevel;

    //Empty constructor for springboot
    public Aircraft(){ }

    /**
     * This instantiates a new aircraft
     * @param aircraftName
     * @param airportLocation
     * @param maxFuelLevel
     * @param fuelLevel
     */
    public Aircraft(String aircraftName, String airportLocation, int maxFuelLevel, int fuelLevel) {
        this.aircraftName = aircraftName;
        this.airportLocation = airportLocation;
        this.maxFuelLevel = maxFuelLevel;
        this.fuelLevel = fuelLevel;
    }

    //Getters and Setters for all variables

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAircraftName() {
        return aircraftName;
    }

    public void setAircraftName(String aircraftName) {
        this.aircraftName = aircraftName;
    }

    public String getAirportLocation() {
        return airportLocation;
    }

    public void setAirportLocation(String airportLocation) {
        this.airportLocation = airportLocation;
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
