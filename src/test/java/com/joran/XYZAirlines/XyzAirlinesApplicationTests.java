package com.joran.XYZAirlines;

import com.joran.XYZAirlines.models.Aircraft;
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
		Aircraft aircraft = new Aircraft("Boeing", "london", 1, 5);
		aircraft.setId(1);
		long id = aircraft.getId();
		String aircraftName = aircraft.getAircraftName();


		assertEquals(1,id);
		assertEquals("Boeing",aircraftName);
		;
	}





}
