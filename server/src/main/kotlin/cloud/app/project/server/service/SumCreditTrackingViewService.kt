package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.model.SumCreditTrackingView
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import cloud.app.project.server.repository.SumCreditTrackingViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class SumCreditTrackingViewService {
    @Autowired
    private lateinit var sumCreditTrackingViewRepo: SumCreditTrackingViewRepo

    fun getAllSumCreditTrackingView(): List<SumCreditTrackingView> {
        return sumCreditTrackingViewRepo.findAll()
    }
}