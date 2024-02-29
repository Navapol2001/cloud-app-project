package cloud.app.project.server.controller

import cloud.app.project.server.model.CreditTrackingView
import cloud.app.project.server.service.CreditTrackingViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/creditTrackingView")
class CreditTrackingViewController {
    @Autowired
    private lateinit var creditTrackingViewService: CreditTrackingViewService

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping
    fun getAll(
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): MutableList<CreditTrackingView> {
        val pageable = PageRequest.of(page, size)
        return creditTrackingViewService.getAllCreditTrackingView(pageable)
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/year/{year}")
    fun getByYear(
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<CreditTrackingView> {
        val pageable = PageRequest.of(page, size)
        return creditTrackingViewService.getByUpdDate(year, pageable)
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/custId/{custId}")
    fun getByCustId(
        @PathVariable("custId") custId: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<CreditTrackingView> {
        val pageable = PageRequest.of(page, size)
        return creditTrackingViewService.getByCustId(custId, pageable)
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/filter/{custId}/{year}")
    fun getFilteredCreditViews(
        @PathVariable("custId") custId: String,
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<CreditTrackingView> {
        val pageable = PageRequest.of(page, size)
        return creditTrackingViewService.getByFilterParam(custId, year, pageable)
    }
}