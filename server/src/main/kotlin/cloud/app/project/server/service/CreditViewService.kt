package cloud.app.project.server.service

import cloud.app.project.server.model.CreditView
import cloud.app.project.server.repository.CreditViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class CreditViewService {
    @Autowired
    private lateinit var creditViewRepo: CreditViewRepo

    fun getAllCreditView(pageable: Pageable): MutableList<CreditView> {
        return creditViewRepo.findAll()
    }

    fun getByUpdDate(year: String, pageable: Pageable): Page<CreditView> {
        return creditViewRepo.findByYear(year, pageable)
    }

    fun getByCustId(custId: String, pageable: Pageable): Page<CreditView> {
        return  creditViewRepo.findByCustId(custId, pageable)
    }

    fun getByFilterParam(custId: String, year: String, pageable: Pageable): Page<CreditView> {
        return creditViewRepo.findByFilterParam(custId, year, pageable)
    }

}