package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class AmountCreditTrackingViewService {
    @Autowired
    private lateinit var amountCreditTrackingViewRepo: AmountCreditTrackingViewRepo

    fun getAllAmountCreditTrackingView(): List<AmountCreditTrackingView> {
        return amountCreditTrackingViewRepo.findAll()
    }
}