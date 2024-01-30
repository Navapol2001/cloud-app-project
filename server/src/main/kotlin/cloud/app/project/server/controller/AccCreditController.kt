package cloud.app.project.server.controller

import cloud.app.project.server.model.AccCredit
import cloud.app.project.server.service.AccCreditService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/users")
class AccCreditController {
     @Autowired
     private lateinit var accCreditService: AccCreditService

     @GetMapping
     fun getAllAccCredit(): List<AccCredit> {
         return accCreditService.getAllAccCredit()
     }
}