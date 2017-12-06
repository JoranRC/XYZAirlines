package com.joran.XYZAirlines.controllers;

import com.joran.XYZAirlines.models.Aircraft;
import com.joran.XYZAirlines.models.Airport;
import com.joran.XYZAirlines.repositories.AircraftRepository;
import com.joran.XYZAirlines.repositories.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/airport/")
public class AirportController {

    @Autowired
    private AircraftRepository aircraftRepository;
    @Autowired
    private AirportRepository airportRepository;

    @RequestMapping(value = "all", method = RequestMethod.GET)
    public Iterable<Airport> index() {
        return airportRepository.findAll();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public void add(@RequestBody Airport airportToAdd) {
        airportRepository.save(airportToAdd);
    }

    /*
    @RequestMapping(value = "delete/{airportName}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String airportName) {
        Airport airportToRemove = airportRepository.findOneByName(airportName);
        airportRepository.delete(airportToRemove);
    }
    */

}
