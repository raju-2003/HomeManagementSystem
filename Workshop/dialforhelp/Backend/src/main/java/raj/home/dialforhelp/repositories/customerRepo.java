package raj.home.dialforhelp.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import raj.home.dialforhelp.models.Customer;
public interface customerRepo extends JpaRepository<Customer, Integer> {

    Customer findByEmail(String email);
    
}
