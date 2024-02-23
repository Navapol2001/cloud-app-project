package cloud.app.project.server.controller

import cloud.app.project.server.model.SumCreditTrackingView
import cloud.app.project.server.service.SumCreditTrackingViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/sumCredit")
class SumCreditTrackingViewController {
    @Autowired
    private lateinit var sumCreditTrackingViewService: SumCreditTrackingViewService

    @GetMapping
    fun getAll(): List<SumCreditTrackingView> {
        return sumCreditTrackingViewService.getAllSumCreditTrackingView()
    }
}