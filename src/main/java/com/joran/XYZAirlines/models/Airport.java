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

    public Airport(long id, String airportName, List<Aircraft> aircraftList) {
        this.id = id;
        this.airportName = airportName;
        this.aircraftList = aircraftList;
    }
}
