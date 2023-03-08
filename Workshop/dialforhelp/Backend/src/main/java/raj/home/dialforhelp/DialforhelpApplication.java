package raj.home.dialforhelp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
@EnableAutoConfiguration
@EntityScan(basePackages = {"raj.home.dialforhelp.models"})
@SpringBootApplication
public class DialforhelpApplication {

	public static void main(String[] args) {
		SpringApplication.run(DialforhelpApplication.class, args);
	}

}
