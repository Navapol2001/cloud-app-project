package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.model.CrTrckView
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import cloud.app.project.server.repository.CrTrckViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CrTrckViewService {
    @Autowired
    private lateinit var crTrckViewRepo: CrTrckViewRepo

    fun getAllCrTrckView(): List<CrTrckView> {
        return crTrckViewRepo.findAll()
    }
}