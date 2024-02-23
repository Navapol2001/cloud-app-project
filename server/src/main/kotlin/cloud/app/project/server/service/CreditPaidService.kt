package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.model.CreditPaid
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import cloud.app.project.server.repository.CreditPaidRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CreditPaidService {
    @Autowired
    private lateinit var creditPaidRepo: CreditPaidRepo

    fun getAllCreditPaid(): List<CreditPaid> {
        return creditPaidRepo.findAll()
    }
}