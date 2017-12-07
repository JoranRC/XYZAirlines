package com.joran.XYZAirlines.controllers;

import com.joran.XYZAirlines.models.Aircraft;
import com.joran.XYZAirlines.repositories.AircraftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Author Joran
 * AircraftController Class
 * Controller with endpoints for the aircraft class.
 */

@RestController
@RequestMapping("api/aircraft/")
public class AircraftController {

    /**
     * Makes a instance of the aircraftrepository, autowired so that there's always just one instance
     */
    @Autowired
    private AircraftRepository aircraftRepository;

    /**
     * @return a list of all aircrafts in the database
     */
    @RequestMapping(value = "all", method = RequestMethod.GET)
    public Iterable<Aircraft> index() {
        //Aircraft testAircraft = new Aircraft("Boeing", "london", 1, 5);
        //aircraftRepository.save(testAircraft);
        return aircraftRepository.findAll();
    }

    /**
     * Add an aircraft to the repository
     * @param aircraftToAdd
     */
    @RequestMapping(value = "add", method = RequestMethod.POST)
    public void add(@RequestBody Aircraft aircraftToAdd) {
       aircraftRepository.save(aircraftToAdd);
    }

    /**
     * Get one object form the database via ID
     * @param id
     * @return the corresponding object form the database
     */
    @RequestMapping(value = "getOne/{id}", method = RequestMethod.GET)
    public Aircraft getRoom(@PathVariable long id){
        return aircraftRepository.findOne(id);
    }

    /**
     * Deletes an object via ID
     * @param id
     */
    @RequestMapping(value = "delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable long id) {
        Aircraft airportToReturn = aircraftRepository.findOne(id);
        aircraftRepository.delete(id);
    }

    /**
     * Replaces an existing object with a new version of that object
     * @param aircraft
     */
    @RequestMapping(value = "update", method = RequestMethod.PUT)
    public void updateAircraft(@RequestBody Aircraft aircraft){
        aircraftRepository.save(aircraft);
    }
}