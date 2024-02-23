package cloud.app.project.server.controller

import cloud.app.project.server.model.CreditTempView
import cloud.app.project.server.service.CreditTempViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/creditTemp")
class CreditTempViewController {
    @Autowired
    private lateinit var creditTempViewService: CreditTempViewService

    @GetMapping
    fun getAll(): List<CreditTempView> {
        return creditTempViewService.getAllCreditTempView()
    }
}