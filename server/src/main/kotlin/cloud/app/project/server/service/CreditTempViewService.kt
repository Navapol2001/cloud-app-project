package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.model.CreditTempView
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import cloud.app.project.server.repository.CreditTempViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CreditTempViewService {
    @Autowired
    private lateinit var creditTempViewRepo: CreditTempViewRepo

    fun getAllCreditTempView(): List<CreditTempView> {
        return creditTempViewRepo.findAll()
    }
}