package com.joran.XYZAirlines.repositories;

import com.joran.XYZAirlines.models.Aircraft;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AircraftRepository extends CrudRepository<Aircraft, Long> {
    Aircraft findOneByName(String aircraftName);

}
