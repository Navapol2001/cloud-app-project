package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.model.CreditTrackingView
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import cloud.app.project.server.repository.CreditTrackingViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CreditTrackingViewService {
    @Autowired
    private lateinit var creditTrackingViewRepo: CreditTrackingViewRepo

    fun getAllCreditTrackingView(): List<CreditTrackingView> {
        return creditTrackingViewRepo.findAll()
    }
}