package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.model.CreditView
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import cloud.app.project.server.repository.CreditViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class CreditViewService {
    @Autowired
    private lateinit var creditViewRepo: CreditViewRepo

    fun getAllCreditView(): List<CreditView> {
        return creditViewRepo.findAll()
    }

    fun getByUpdDate(year: String): List<CreditView> {
        return creditViewRepo.findByYear(year)
    }
}