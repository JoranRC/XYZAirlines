package com.joran.XYZAirlines.repositories;

import com.joran.XYZAirlines.models.Airport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends CrudRepository<Airport, Long> {

}
