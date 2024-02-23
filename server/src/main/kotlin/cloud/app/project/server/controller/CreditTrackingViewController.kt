package cloud.app.project.server.controller

import cloud.app.project.server.model.CreditTrackingView
import cloud.app.project.server.service.CreditTrackingViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/creditTracking")
class CreditTrackingViewController {
    @Autowired
    private lateinit var creditTrackingViewService: CreditTrackingViewService

    @GetMapping
    fun getAll(): List<CreditTrackingView> {
        return creditTrackingViewService.getAllCreditTrackingView()
    }
}