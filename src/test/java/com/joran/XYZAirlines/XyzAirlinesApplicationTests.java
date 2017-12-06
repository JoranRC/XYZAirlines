package com.joran.XYZAirlines;

import com.joran.XYZAirlines.models.Aircraft;
import com.joran.XYZAirlines.models.Airport;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class XyzAirlinesApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Test
	public void testAircraftModel() {
		List<Aircraft> aircraftList = new ArrayList<Aircraft>();
		Airport london = new Airport(1, "London", aircraftList);
		Aircraft aircraft = new Aircraft(1, "Boeing", "london", 1, 5);

		long id = aircraft.getId();
		String aircraftName = aircraft.getAircraftName();


		assertEquals(1,id);
		assertEquals("Boeing",aircraftName);
		;
	}

	@Test
	public void testAirplaneModel(){
		List<Aircraft> aircraftList = new ArrayList<Aircraft>();
		Airport london = new Airport(1,"London", aircraftList);
		Aircraft aircraft = new Aircraft(1,"Boeing", "london", 1,5);

		long id = london.getId();
		String airportName = london.getAirportName();
		List<Aircraft> aircraftList2 = london.getAircraftList();

		assertEquals(1,id);
		assertEquals("London", airportName);
		assertEquals(aircraftList, aircraftList2);

	}



}
