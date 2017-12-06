package com.joran.XYZAirlines;

import com.joran.XYZAirlines.models.Aircraft;
import com.joran.XYZAirlines.models.Airport;
import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootApplication
public class XyzAirlinesApplication {

	public static void main(String[] args) {
		SpringApplication.run(XyzAirlinesApplication.class, args);
	}



	@Test
	public void testAircraftModel(){
		List<Aircraft> aircraftList = new ArrayList<Aircraft>();
		Airport london = new Airport(1,"London", aircraftList);
		Aircraft aircraft = new Aircraft(1,"Boeing", london, 1,5);

		long id = aircraft.getId();
		String aircraftName = aircraft.getAircraftName();
		Airport airport = aircraft.getAirport();

		assertEquals(1,id);
		assertEquals("Boeing",aircraftName);
		assertEquals(london, airport);
	}

	@Test
	public void testAirplaneModel(){
		List<Aircraft> aircraftList = new ArrayList<Aircraft>();
		Airport london = new Airport(1,"London", aircraftList);
		Aircraft aircraft = new Aircraft(1,"Boeing", london, 1,5);

		long id = london.getId();
		String airportName = london.getAirportName();
		List<Aircraft> aircraftList2 = london.getAircraftList();

		assertEquals(1,id);
		assertEquals("London", airportName);
		assertEquals(aircraftList, aircraftList2);

	}


}
