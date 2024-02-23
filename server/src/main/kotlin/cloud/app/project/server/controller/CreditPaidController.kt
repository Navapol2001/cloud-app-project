package cloud.app.project.server.controller

import cloud.app.project.server.model.CreditPaid
import cloud.app.project.server.service.CreditPaidService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/creditPaid")
class CreditPaidController {
    @Autowired
    private lateinit var creditPaidService: CreditPaidService

    @GetMapping
    fun getAll(): List<CreditPaid> {
        return creditPaidService.getAllCreditPaid()
    }
}