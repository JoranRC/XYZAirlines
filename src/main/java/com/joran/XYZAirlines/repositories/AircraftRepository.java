package com.joran.XYZAirlines.repositories;

import com.joran.XYZAirlines.models.Aircraft;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Joran
 * CrudRepository containing all the aircraft objects.
 */
@Repository
public interface AircraftRepository extends CrudRepository<Aircraft, Long> {

}
