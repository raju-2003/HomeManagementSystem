package raj.home.dialforhelp.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import raj.home.dialforhelp.models.Customer;
import raj.home.dialforhelp.repositories.customerRepo;
@Service
public class apiCustServices {
    @Autowired
    private customerRepo api;

    public List<Customer> getAllCustomers() {
        return api.findAll();
    }

    public String addCustomer(Customer cust) {
        api.save(cust);
        return "Signup Successful";
    }

    public String updateCustomer(Customer cust, Integer id){
        api.findById(id).orElse(null);
        api.saveAndFlush(cust);
        return "Update Successful";
    }

    public String deleteCustomer(Integer id) {
        try {
            api.deleteById(id);
            return "Delete Successful";
        } catch (Exception e) {
            return "Delete Failed";
        }
    }

    public String validateCustomer(Customer cust) {
       //check email and password both are same
        Customer c = api.findByEmail(cust.getEmail());
        if(c == null) {
            return "Email not found";
        }
        if(cust.getPassword().equals(c.getPassword())) {
            return "Login Successful";
        }
        return "Login Failed";
    }

    public Customer getCustomerByEmail(String email) {
        return api.findByEmail(email);
    }
}
