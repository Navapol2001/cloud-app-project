package cloud.app.project.server.controller

import cloud.app.project.server.model.CustomerNameView
import cloud.app.project.server.service.CustomerNameViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/customerName")
class CustomerNameViewController {
    @Autowired
    private lateinit var customerNameViewService: CustomerNameViewService

    @GetMapping
    fun getAll(): List<CustomerNameView> {
        return customerNameViewService.getAllCustomerNameView()
    }
}