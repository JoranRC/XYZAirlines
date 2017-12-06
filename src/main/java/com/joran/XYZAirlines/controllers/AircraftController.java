package com.joran.XYZAirlines.controllers;

import com.joran.XYZAirlines.models.Aircraft;
import com.joran.XYZAirlines.repositories.AircraftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/aircraft/")
public class AircraftController {

    @Autowired
    private AircraftRepository aircraftRepository;

    @RequestMapping(value = "all", method = RequestMethod.GET)
    public Iterable<Aircraft> index() {
        Aircraft testAircraft = new Aircraft("Boeing", "london", 1, 5);
        aircraftRepository.save(testAircraft);
        return aircraftRepository.findAll();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public void add(@RequestBody Aircraft aircraftToAdd) {
       aircraftRepository.save(aircraftToAdd);
    }

    @RequestMapping(value = "getOne/{id}", method = RequestMethod.GET)
    public Aircraft getRoom(@PathVariable long id){
        return aircraftRepository.findOne(id);
    }

    @RequestMapping(value = "delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable long id) {
        Aircraft airportToReturn = aircraftRepository.findOne(id);
        aircraftRepository.delete(id);
    }
}