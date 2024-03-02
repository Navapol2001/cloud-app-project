package cloud.app.project.server.service

import cloud.app.project.server.model.DebitTrackingView
import cloud.app.project.server.repository.DebitTrackingViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class DebitTrackingViewService {
    @Autowired
    private lateinit var debitTrackingViewRepo: DebitTrackingViewRepo

    fun getAllDebitTrackingView(pageable: Pageable): Page<DebitTrackingView> {
        return debitTrackingViewRepo.findAll(pageable)
    }

    fun getByUpdDate(year: String, pageable: Pageable): Page<DebitTrackingView> {
        return debitTrackingViewRepo.findByYear(year, pageable)
    }

    fun getByCustId(custId: String, pageable: Pageable): Page<DebitTrackingView> {
        return  debitTrackingViewRepo.findByCustId(custId, pageable)
    }

    fun getByFilterParam(custId: String, year: String, pageable: Pageable): Page<DebitTrackingView> {
        return debitTrackingViewRepo.findByFilterParam(custId, year, pageable)
    }
}