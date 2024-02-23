package cloud.app.project.server.controller

import cloud.app.project.server.model.CreditView
import cloud.app.project.server.service.CreditViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/creditView")
class CreditViewController {
    @Autowired
    private lateinit var creditViewService: CreditViewService

    @GetMapping
    fun getAll(): List<CreditView> {
        return creditViewService.getAllCreditView()
    }
}