package com.joran.XYZAirlines.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Airport {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    String airportName;

    @ManyToMany
    List<Aircraft> aircraftList;

    public Airport(){

    }

    public Airport(long id, String airportName, List<Aircraft> aircraftList) {
        this.id = id;
        this.airportName = airportName;
        this.aircraftList = aircraftList;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAirportName() {
        return airportName;
    }

    public void setAirportName(String airportName) {
        this.airportName = airportName;
    }

    public List<Aircraft> getAircraftList() {
        return aircraftList;
    }

    public void setAircraftList(List<Aircraft> aircraftList) {
        this.aircraftList = aircraftList;
    }
}
