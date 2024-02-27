package cloud.app.project.server.controller

import cloud.app.project.server.model.CreditView
import cloud.app.project.server.service.CreditViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/creditView")
class CreditViewController {
    @Autowired
    private lateinit var creditViewService: CreditViewService

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping
    fun getAll(): List<CreditView> {
        return creditViewService.getAllCreditView()
    }

    @GetMapping("/custId/{custId}")
    fun getIdFilter(@PathVariable("custId") custId: String): List<CreditView> {
        return creditViewService.getByCustId(custId)
    }

    @GetMapping("/filter/{custId}/{year}")
    fun getFilteredCreditViews(
        @PathVariable("custId") custId: String,
        @PathVariable("year") year: String
    ): List<CreditView> {
        return creditViewService.getByFilterParam(custId, year)
    }
}