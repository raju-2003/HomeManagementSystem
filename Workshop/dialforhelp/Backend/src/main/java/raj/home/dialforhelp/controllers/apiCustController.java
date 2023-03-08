package raj.home.dialforhelp.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import raj.home.dialforhelp.models.Customer;
import raj.home.dialforhelp.services.apiCustServices;
@RestController
//receive input from react
@CrossOrigin(origins = "http://localhost:3000")
public class apiCustController {
    @Autowired
    private apiCustServices api;

    @GetMapping("/customer")
    public List<Customer> getAllCustomers() {
        return api.getAllCustomers();
    }

    @GetMapping("/customer/{email}")
    public Customer getCustomerByEmail(@PathVariable String email) {
        return api.getCustomerByEmail(email);
    }

    @PostMapping("/custadd")
    public String addCustomer(@RequestBody Customer cust) {
        return api.addCustomer(cust);
    }

    @PostMapping("/custvalidate")
    public String validateCustomer(@RequestBody Customer cust) {
        return api.validateCustomer(cust);
    }

    @PutMapping("/custupdate/{id}")
    public String updateCustomer(@RequestBody Customer cust, @PathVariable Integer id) {
        return api.updateCustomer(cust, id);
    }

    @DeleteMapping("/custdelete/{id}")
    public String deleteCustomer(@PathVariable Integer id) {
        return api.deleteCustomer(id);
    }

}
