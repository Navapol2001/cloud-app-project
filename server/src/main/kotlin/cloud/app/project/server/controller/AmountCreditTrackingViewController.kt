package cloud.app.project.server.controller

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.service.AmountCreditTrackingViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/amountCredit")
class AmountCreditTrackingViewController {
    @Autowired
    private lateinit var amountCreditTrackingViewService: AmountCreditTrackingViewService

    @GetMapping
    fun getAll(): List<AmountCreditTrackingView> {
        return amountCreditTrackingViewService.getAllAmountCreditTrackingView()
    }
}