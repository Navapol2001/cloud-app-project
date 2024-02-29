package cloud.app.project.server.controller

import cloud.app.project.server.model.CreditPaid
import cloud.app.project.server.service.CreditPaidService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/creditPaid")
class CreditPaidController {
    @Autowired
    private lateinit var creditPaidService: CreditPaidService

    @GetMapping
    fun getAll(): List<CreditPaid> {
        return creditPaidService.getAllCreditPaid()
    }
    @GetMapping("/year/{year}")
    fun getByYear(
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<CreditPaid> {
        val pageable = PageRequest.of(page, size)
        return creditPaidService.getByUpdDate(year, pageable)
    }

    @GetMapping("/custId/{custId}")
    fun getByCustId(
        @PathVariable("custId") custId: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<CreditPaid> {
        val pageable = PageRequest.of(page, size)
        return creditPaidService.getByCustId(custId, pageable)
    }

    @GetMapping("/filter/{custId}/{year}")
    fun getFilteredCreditViews(
        @PathVariable("custId") custId: String,
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<CreditPaid> {
        val pageable = PageRequest.of(page, size)
        return creditPaidService.getByFilterParam(custId, year, pageable)
    }
}