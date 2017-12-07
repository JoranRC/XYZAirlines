package com.joran.XYZAirlines;

import com.joran.XYZAirlines.models.Aircraft;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Joran
 * Testclass witch contains tests
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class XyzAirlinesApplicationTests {

	@Test
	public void contextLoads() {
	}


	@Test
	public void testAircraftName() {
		Aircraft aircraft = new Aircraft();
		aircraft.setAircraftName("Boeing");
		String aircraftName = aircraft.getAircraftName();
		assertEquals("Boeing",aircraftName);
	}

	@Test
	public void testAircraftLocation() {
		Aircraft aircraft = new Aircraft();
		aircraft.setAirportLocation("Amsterdam");
		String aircraftLocation = aircraft.getAirportLocation();
		assertEquals("Amsterdam", aircraftLocation);
	}

	@Test
	public void testAircraftMaxFuelLevel(){
		Aircraft aircraft = new Aircraft();
		aircraft.setMaxFuelLevel(5);
		int maxFuelLevel = aircraft.getMaxFuelLevel();
		assertEquals(5,maxFuelLevel);
	}






}
