package cloud.app.project.server.controller

import cloud.app.project.server.model.DebitPaid
import cloud.app.project.server.service.DebitPaidService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/debitPaid")
class DebitPaidController {
    @Autowired
    private lateinit var debitPaidService: DebitPaidService

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping
    fun getAll(
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitPaid> {
        val pageable = PageRequest.of(page,size)
        return debitPaidService.getAllDebitPaid(pageable)
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/year/{year}")
    fun getByYear(
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitPaid> {
        val pageable = PageRequest.of(page, size)
        return debitPaidService.getByUpdDate(year, pageable)
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/custId/{custId}")
    fun getByCustId(
        @PathVariable("custId") custId: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitPaid> {
        val pageable = PageRequest.of(page, size)
        return debitPaidService.getByCustId(custId, pageable)
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/filter/{custId}/{year}")
    fun getFiltereddebitViews(
        @PathVariable("custId") custId: String,
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitPaid> {
        val pageable = PageRequest.of(page, size)
        return debitPaidService.getByFilterParam(custId, year, pageable)
    }
}