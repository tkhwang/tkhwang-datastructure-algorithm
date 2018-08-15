package main

import (
	"fmt"
)

func main() {
	solarSystem := make(map[string]float32)

	solarSystem["Mercury"] = 87.969
	solarSystem["Venus"] = 224.700
	solarSystem["Earth"] = 365.256
	solarSystem["Mars"] = 686.97
	solarSystem["Jupiter"] = 4333.287
	solarSystem["Saturn"] = 10756.1995
	solarSystem["Uranus"] = 30707.4896
	solarSystem["Neptune"] = 68223.3528

	value, ok := solarSystem["Pluto"]
	fmt.Println(value, ok)

	if value, ok := solarSystem["Saturn"]; ok {
		fmt.Println(value)
	}

	for key, value := range solarSystem {
		fmt.Println(key, value)
	}

	a := map[string]int{"Hello": 10, "world": 20}
	delete(a, "world")
	fmt.Println(a)

	terrestialPlant := map[string]map[string]float32{
		"Mercury": map[string]float32{
			"meanRadius":    2439.7,
			"mass":          3.38E+23,
			"orbitalPeriod": 87.968,
		},
		"Venus": map[string]float32{
			"meanRadius":    2439.7,
			"mass":          3.38E+23,
			"orbitalPeriod": 87.968,
		},
	}
	fmt.Println(terrestialPlant)
}
