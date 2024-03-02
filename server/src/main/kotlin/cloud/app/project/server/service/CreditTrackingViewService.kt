package cloud.app.project.server.service

import cloud.app.project.server.model.CreditTrackingView
import cloud.app.project.server.model.CreditView
import cloud.app.project.server.repository.CreditTrackingViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class CreditTrackingViewService {
    @Autowired
    private lateinit var creditTrackingViewRepo: CreditTrackingViewRepo

    fun getAllCreditTrackingView(pageable: Pageable): Page<CreditTrackingView> {
        return creditTrackingViewRepo.findAll(pageable)
    }

    fun getByUpdDate(year: String, pageable: Pageable): Page<CreditTrackingView> {
        return creditTrackingViewRepo.findByYear(year, pageable)
    }

    fun getByCustId(custId: String, pageable: Pageable): Page<CreditTrackingView> {
        return  creditTrackingViewRepo.findByCustId(custId, pageable)
    }

    fun getByFilterParam(custId: String, year: String, pageable: Pageable): Page<CreditTrackingView> {
        return creditTrackingViewRepo.findByFilterParam(custId, year, pageable)
    }
}